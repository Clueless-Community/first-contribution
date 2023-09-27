namespace ReverseInteger
{
    internal class Program
    {
        static void Main(string[] args)
        {
            // Input any integer here
            var x = 120;

            Console.WriteLine(ReverseInt(x));
        }
        public static int ReverseInt(int x)
        {
            var reversedX = 0;
            while (x != 0)
            {
                var pop = x % 10;
                x /= 10;

                reversedX = reversedX * 10 + pop;
            }
            return reversedX;
        }
    }
}