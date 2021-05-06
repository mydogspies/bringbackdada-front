import { useUser } from '@auth0/nextjs-auth0';
import styled from "styled-components";

export default function Admin() {

    const { user, error, isLoading } = useUser();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error.message}</div>;

    if (user) {
        return (
            <div>
                <Test>Welcome {user.name}! <a href="/api/auth/logout">Logout</a></Test>
            </div>
        );
    }

    return <a href="/api/auth/login">Login</a>;
};

const Test = styled.h1`
  color: red;
`;
