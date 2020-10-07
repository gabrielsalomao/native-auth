import React, { useContext } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import AuthContext from '../../contexts/auth';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
});

const SignIn: React.FC = () => {
    const { signed, user, signIn } = useContext(AuthContext);

    function handleSignIn() {
        signIn();
    }

    console.log(signed)
    console.log(user)
    
    return (
        <View style={styles.container}>
            <Button
                title="Sign in"
                onPress={handleSignIn}
            >

            </Button>
        </View>
    );
};

export default SignIn;