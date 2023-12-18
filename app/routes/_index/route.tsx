import { redirect } from "@remix-run/node";
import { useNavigate } from "@remix-run/react";

import indexStyles from "./style.css";
import {
    AppProvider,
    Button,
    Page,
    FormLayout,
    TextField,
    Card,
    Spinner,
} from "@shopify/polaris";
import { useState } from "react";
// @ts-ignore
import { useMutation } from "@apollo/client";
import type { LoaderFunctionArgs } from "@remix-run/node";
import { LOGIN_MUTATION } from "~/graphql/mutation";

export const links = () => [{ rel: "stylesheet", href: indexStyles }];

export async function loader({ request }: LoaderFunctionArgs) {
    const url = new URL(request.url);
    if (url.searchParams.get("shop")) {
        throw redirect(`/app?${url.searchParams.toString()}`);
    }

    return null;
}
export default function App() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const [login] = useMutation(LOGIN_MUTATION);

    const handleLogin = async () => {
        try {
            setIsLoading(true);
            const response = await login({
                variables: {
                    input: {
                        username,
                        password,
                    }
                }
            });
            setIsLoading(false);
            if (response.data.login) {
                localStorage.setItem('accessToken', response.data.login);
                navigate('/admin');
            } else {
                throw new Error('Some error occured');
            }
        } catch (err: any) {
            setError(err);
            setIsLoading(false);
        }
    }

    return (
        <AppProvider i18n={require('@shopify/polaris/locales/en.json')}>
            <div className="center-form">
                <Page>
                    <Card>
                        {
                            error ? (
                                <p style={{ textAlign: 'center', color: 'red' }}>{error}</p>
                            ) : null
                        }
                        {
                            isLoading ? (<p style={{ textAlign: 'center', color: 'red' }}>
                                <Spinner />
                            </p>) : null
                        }
                        <FormLayout>
                            <TextField label="Username" value={username} onChange={(e) => setUsername(e)} autoComplete="off" />
                            <TextField
                                type="password"
                                value={password}
                                label="Password"
                                onChange={(e) => setPassword(e)}
                                autoComplete="off"
                            />
                            <Button onClick={handleLogin}>
                                Login
                            </Button>
                        </FormLayout>
                    </Card>
                </Page>
            </div>
        </AppProvider >
    )
}
