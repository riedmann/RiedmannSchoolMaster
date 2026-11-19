public class Account
{
    public static const double InterestRate = 0.02;
    private static int accountCount = 0;

    protected string owner;
    private double balance;

    public Account(string owner, double initialBalance)
    {
        this.owner = owner;
        this.balance = initialBalance;
        accountCount++;
    }

    public void Deposit(double amount)
    {
        double newBalance = this.balance + amount;
        this.balance = newBalance;
    }
}
