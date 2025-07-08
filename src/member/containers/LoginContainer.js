import React, { useCallback, useState } from "react";
import LoginForm from "../components/LoginForm";

const LoginContainer = () => {
    const [form, setForm] = useState({});

    const onChange = useCallback((e) => {
        setForm((form) => ({...form, [e.target.name]: e.target.value}));
    }, []);

    const onSubmit = useCallback((e) => {
        e.preventDefault();
    }, []);

    return <LoginForm form={form} onChange={onChange} onSubmit={onSubmit} />;
};

export default React.memo(LoginContainer);