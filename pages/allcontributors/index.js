import React, { useState, useMemo } from "react";
import ContributorCard from "../components/ContributorCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Document from "../document";
import contributors from "../../data/contributors";
import Topfab from "../components/Topfab";
import PageContentWrapper from "../components/PageContentWrapper";
import Image from "next/image";
import { FixedSizeGrid as Grid } from "react-window";

const useSearch = (contributors, search) => {
	return useMemo(() => {
		let filteredContributors;
		
		// If no search term, return all contributors
		if (!search || search.trim() === '') {
			filteredContributors = contributors;
		} else {
			const searchTerm = search.toLowerCase().trim();
			
			filteredContributors = contributors.filter((item) => {
				const strName = item.name.toLowerCase();
				const strCollege = item.college.toLowerCase();
				const strBranch = item.branch.toLowerCase();
				
				return strName.includes(searchTerm) || 
					   strCollege.includes(searchTerm) || 
					   strBranch.includes(searchTerm);
			});
		}
		
		// Sort alphabetically by name
		return filteredContributors.sort((a, b) => 
			a.name.toLowerCase().localeCompare(b.name.toLowerCase())
		);
	}, [contributors, search]);
};

function  VirtualGrid( { searchResult } ){
	const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

	React.useEffect(() => {
		const handleResize = () => {
			setWindowSize({ 
				width: window.innerWidth, 
				height: window.innerHeight 
			});
		};

		// Set initial size
		handleResize();
		
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	// Calculate responsive grid dimensions
	const getGridDimensions = () => {
		const containerPadding = 80; // Account for container padding (40px each side)
		const cardMargin = 24; // Account for card margins
		const availableWidth = Math.max(windowSize.width - containerPadding, 300);
		
		let columnCount = 3;
		let minCardWidth = 320; // Minimum card width for proper content display
		
		if (availableWidth < 768) {
			columnCount = 1;
			minCardWidth = Math.min(400, availableWidth - cardMargin);
		} else if (availableWidth < 1200) {
			columnCount = 2;
			minCardWidth = Math.floor((availableWidth - cardMargin) / 2) - 20;
		} else {
			columnCount = 3;
			minCardWidth = Math.floor((availableWidth - cardMargin) / 3) - 20;
		}
		
		const columnWidth = Math.max(minCardWidth, 320);
		const gridWidth = availableWidth;
		const gridHeight = Math.min(windowSize.height * 0.7, 1000);
		
		return { columnCount, columnWidth, gridWidth, gridHeight };
	};

	const { columnCount, columnWidth, gridWidth, gridHeight } = getGridDimensions();

	const Cell = ({ rowIndex , columnIndex , style }) =>{
		const itemIndex = rowIndex * columnCount + columnIndex;
		if (itemIndex >= searchResult.length) {
			return null;
		}
	  
		const item = searchResult[itemIndex];
		  
		const searchStyles = {
			width: "100%",
			display: "flex",
			height: "100%",
			overflow: "visible",
			padding: "8px",
			boxSizing: "border-box"
		};

		return (
			<div className="GridItemEven" style={style}>
				<ContributorCard
					name={item.name}
					branch={item.branch}
					college={item.college}
					year={item.year} 
					linkedin={item.linkedin}
					github={item.github}
					gender={item.gender}
					style={searchStyles}
				/>
			</div>
		);
	};

	if (windowSize.width === 0) {
		return <div>Loading...</div>;
	}

	return(
		<div style={{ 
			width: '100%', 
			display: 'flex', 
			justifyContent: 'center',
			padding: '0 20px',
			boxSizing: 'border-box'
		}}>
			<Grid 
				columnCount={columnCount}
				className="Grid"
				columnWidth={columnWidth}
				height={gridHeight}
				rowCount={Math.ceil(searchResult.length / columnCount)}
				rowHeight={360}
				width={gridWidth}
				style={{
					overflow: 'auto'
				}}
			>
				{Cell}
			</Grid>
		</div>
	);
}

const index = () => {
	const totalContributor = contributors.length;
	const [search, setSearch] = useState("");
	const searchResult = useSearch(contributors, search);

	

	
	return (
		<>
			<Document />
			<Navbar />
			<PageContentWrapper>
				<section className="text-gray-600 dark:text-white body-font">
					<div className="w-full px-4 sm:px-6 lg:px-8 pt-12 mx-auto max-w-7xl">
						<div className="flex flex-col text-center w-full mb-5">
							<h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 dark:text-white underline underline-offset-4">
								Our Contributors
							</h1>
							<p className="lg:w-2/3 mx-auto leading-relaxed text-lg font-semibold mb-4">
								Total Contibutors : {totalContributor}
							</p>
							<p className="lg:w-2/3 mx-auto leading-relaxed text-base">
								Want to contribute and Have Your Own Contibutor Card on our
								Website Then Click the Button Below.
							</p>
						</div>
						<button className="px-4 py-2 border-[#0061ff] border-4 text-[#0061ff] rounded-xl font-bold text-xl mb-10 hover:bg-blue-500 hover:text-white transition-all hover:border-blue-500 flex mx-auto dark:border-gray-50 dark:hover:text-white dark:text-gray-50 dark:hover:border-blue-500">
							<a href="/instructions" target="_blank">
								Get Your Contributor Card !
							</a>
						</button>
						<div>
							<input
								style={{
									flex: 1,
									display: "flex",
									paddingLeft: 12,
									border: "1px solid black",
									borderRadius: 6,
									color: "black",
									marginBottom:"25px",
									width: "100%"
								}}
								onChange={(e) => setSearch(e.target.value)}
								type="text"
								placeholder="Search your card "
							/>
						</div>
						<div className="flex -m-2 flex-wrap mb-2">
							{!Boolean(searchResult.length) && (
								<div className="text-center w-full">
									<Image
										src="/empty_data.png"
										alt="No Result"
										width={100}
										height={100}
										className="inline-block"
									/>
									<span className="text-lg block">
										No search result found with "<b>{search}</b>"
									</span>
								</div>
							)}
							 
						</div>
						<VirtualGrid searchResult={searchResult} />
					</div>
				</section>
			</PageContentWrapper>
			<Footer />
			<Topfab />
		</>
	);
};

export default index;
