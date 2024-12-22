import { fireEvent, render, screen } from '@testing-library/react';
import Login from '../components/Login';


test('renders Login Component', () => {
    render(<Login />);
    const linkElement = screen.getByText(/login component/i);
    expect(linkElement).toBeInTheDocument();
});

test('renders Login form with Labels', () => {
    render(<Login />);
    const label1 = screen.getByLabelText(/email/i);
    const label2 = screen.getByLabelText(/password/i);
    expect(label1).toBeInTheDocument();
    expect(label2).toBeInTheDocument();
});

test('call onsubmit function should not trigger if email and password is blank', () => {
    const mockFunction = jest.fn(); //()=>{}
    render(<Login onSubmit={mockFunction} />);
    const button = screen.getByRole('button', { name: /login/i });
    fireEvent.click(button);

    expect(mockFunction).not.toHaveBeenCalled();
    expect(screen.getByText(/all fields are mandatory/i)).toBeInTheDocument();
});

test('call onsubmit function with email and password', () => {
    const mockEmail='test@gmail.com';
    const mockPassword='test@123';
    const mockFunction = jest.fn(); //()=>{}
    render(<Login onSubmit={mockFunction} />);
    //Read the label and mock the data into input field
    const label1 = screen.getByLabelText(/email/i);
    fireEvent.change(label1,{target:{value:mockEmail}});

    const label2 = screen.getByLabelText(/password/i);
    fireEvent.change(label2,{target:{value:mockPassword}});

    const button = screen.getByRole('button', { name: /login/i });
    fireEvent.click(button);

    expect(mockFunction).toHaveBeenCalled();
    expect(mockFunction).toHaveBeenCalledWith({email:mockEmail,
        password:mockPassword});
});