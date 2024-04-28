
describe("Alert", () => {
    // normal alert handle by cypress
    it("validation of alert", () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

        cy.get("button[onclick='jsAlert()']").click()

        cy.on("window:alert", (t) => {
            expect(t).to.contains("I am a JS Alert");
        })

        cy.get("#result").should("have.text", "You successfully clicked an alert");

    })

    // alert handled by validating the message and press ok(automatic) or cancel(event)

    it("validation of alert OK", () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

        cy.get("button[onclick='jsConfirm()']").click()

        cy.on("window:confirm", (t) => {
            expect(t).to.contains("I am a JS Confirm");
        })

        cy.get("#result").should("have.text", "You clicked: Ok");

    })


    it("validation of alert - CANCEL", () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

        cy.get("button[onclick='jsConfirm()']").click()

        cy.on("window:alert", (t) => {
            expect(t).to.contains("I am a JS Confirm");
        })

        cy.on('window:confirm', () => false);

        cy.get("#result").should("have.text", "You clicked: Cancel");

    })

    //enter value in text box alert


    it("validation of prompt window - entering value in alert", () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

        //getting hold of window before
        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns('welcome');
        })

        cy.get("button[onclick='jsPrompt()']").click()

        cy.get("#result").should("have.text", "You entered: welcome");



    })


    //authentication

    it.only("validation of authentication alert", () => {
        //cy.visit("https://the-internet.herokuapp.com/basic_auth",{auth:{username:"admin",password:"admin"}})
        cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth")
        cy.get("div[class='example'] p").should("have.contain", "Congratulations");
    })
})