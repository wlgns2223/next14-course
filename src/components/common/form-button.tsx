"use client";

import { useFormStatus } from "react-dom";

export const FormButton: React.FC = () => {
    const { pending } = useFormStatus();
    return <button disabled={pending}>{pending ? "submitting..." : "Share Meal"}</button>;
};
