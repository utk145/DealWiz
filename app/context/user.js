"use client";
import { createContext, useState, useEffect, useContext } from 'react';
import { useRouter } from "next/navigation";
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

const Context = createContext()

const Provider = ({ children }) => {
    const router = useRouter();

    const [user, setUser] = useState(null);
    const [id, setId] = useState(null);
    const [email, setEmail] = useState(null);
    const [name, setName] = useState(null);
    const [picture, setPicture] = useState(null);

    const supabaseClient = createClientComponentClient()


    const clearUser = () => {
        setUser(null)
        setEmail(null)
        setId(null)
        setName(null)
        setPicture(null)
    }

    const getCurrentSession = async () => {

        const resp = await supabaseClient.auth.getSession();

        if (resp && resp.data.session) {
            return resp.data.session;
        }

        clearUser();
        return null;
    }

    const getCurrentUser = async () => {

        if (id) {
            // user already logged-In so needn't get the details
            return;
        }

        const resp = await supabaseClient.auth.getUser();

        if (resp && resp.data.user) {
            const actualUser = resp.data.user;

            setUser(actualUser)
            setId(actualUser.id)
            setEmail(actualUser.email)
            setName(actualUser.identities[0].identity_data.name)
            setPicture(actualUser.identities[0].identity_data.picture)

        }
    }

    useEffect(() => {

        async function isUser() {
            const currentSession = await getCurrentSession();
            if (currentSession) {
                await getCurrentUser();
            }
        }

        isUser();

    }, [])

    const signOut = async () => {
        await supabaseClient.auth.signOut();
        clearUser();
        router.push("/")
    };

    const exposed = { user, id, email, name, picture, signOut };
    return <Context.Provider value={exposed}>{children}</Context.Provider>
}


export const useUser = () => useContext(Context);
export default Provider;