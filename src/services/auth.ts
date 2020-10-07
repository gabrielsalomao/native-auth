interface Response {
    token: string;
    user: {
        name: string;
        email: string;
    };
};

export function signIn(): Promise<Response> {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                token: 'testte',
                user: {
                    name: 'Gabriel',
                    email: 'gabriel@gmail.com',
                },
            });
        }, 2000);
    });
};