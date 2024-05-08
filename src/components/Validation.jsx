import React, { useState } from "react";

export default function CustomValidation() {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordMatch, setPasswordMatch] = useState(true);

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        if (e.target.value !== confirmPassword) {
            setPasswordMatch(false);
        } else {
            setPasswordMatch(true);
        }
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
        if (e.target.value !== password) {
            setPasswordMatch(false);
        } else {
            setPasswordMatch(true);
        }
    };

    return (
        <div>
            <h1>Custom Validation Example</h1>
            <div>
                <label>Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                />
            </div>
            <div>
                <label>Confirm Password:</label>
                <input
                    type="password"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                />
            </div>
            {!passwordMatch && (
                <div style={{ color: "red" }}>
                    Passwords do not match!
                </div>
            )}
        </div>
    );
}
 