import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm/>);
    let header = screen.getByText(/checkout form/i);
    expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
    const { getByLabelText, findAllByText, getByTestId } = render(<CheckoutForm />);

	fireEvent.change(getByLabelText(/first name/i), {target: { value: 'taylor' }});
	fireEvent.change(getByLabelText(/last name/i), {target: { value: 'pepler' }});
	fireEvent.change(getByLabelText(/address/i), {target: { value: 'jamaica' }});
	fireEvent.change(getByLabelText(/city/i), {target: { value: 'englewood' }});
	fireEvent.change(getByLabelText(/state/i), {target: { value: 'co' }});
	fireEvent.change(getByLabelText(/zip/i), { target: { value: '80111' } });

	const checkoutButton = getByTestId('checkoutButton');
	fireEvent.click(checkoutButton);

	findAllByText(/taylor/i);

	expect(getByTestId('successMessage')).toBeInTheDocument();
});
