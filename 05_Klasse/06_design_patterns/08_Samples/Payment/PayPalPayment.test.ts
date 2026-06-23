import { PayPalPayment } from "./PayPalPayment";
import { PaymentContext } from "./PaymentContext";

describe("PayPalPayment", () => {
    let consoleSpy: jest.SpyInstance;

    beforeEach(() => {
        consoleSpy = jest.spyOn(console, "log").mockImplementation(() => { });
    });

    afterEach(() => {
        consoleSpy.mockRestore();
    });

    test("pay() logs the correct amount formatted to 2 decimal places", () => {
        const payment = new PayPalPayment("user@example.com", "secret");

        payment.pay(49.9);

        expect(consoleSpy).toHaveBeenCalledWith(
            expect.stringContaining("49.90 EUR")
        );
    });

    test("pay() logs the account email", () => {
        const email = "user@example.com";
        const payment = new PayPalPayment(email, "secret");

        payment.pay(100);

        expect(consoleSpy).toHaveBeenCalledWith(
            expect.stringContaining(email)
        );
    });

    test("pay() logs exactly 4 lines", () => {
        const payment = new PayPalPayment("user@example.com", "secret");

        payment.pay(50);

        expect(consoleSpy).toHaveBeenCalledTimes(4);
    });

    test("works as strategy inside PaymentContext", () => {
        const payment = new PayPalPayment("shop@paypal.com", "pw");
        const context = new PaymentContext(payment);

        context.executePayment(199.99);

        expect(consoleSpy).toHaveBeenCalledWith(
            expect.stringContaining("199.99 EUR")
        );
    });

    test("replacing strategy in PaymentContext uses the new strategy", () => {
        const first = new PayPalPayment("first@paypal.com", "pw");
        const second = new PayPalPayment("second@paypal.com", "pw");
        const context = new PaymentContext(first);

        context.setStrategy(second);
        consoleSpy.mockClear();

        context.executePayment(25);

        expect(consoleSpy).toHaveBeenCalledWith(
            expect.stringContaining("second@paypal.com")
        );
        expect(consoleSpy).not.toHaveBeenCalledWith(
            expect.stringContaining("first@paypal.com")
        );
    });
});
