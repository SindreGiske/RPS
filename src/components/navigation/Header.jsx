import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export const Header = () => {

    

    return (
        <section className="flex items-center w-full h-16 p-4 text-3xl bg-teal-600">
            <Link to="/">RESTART</Link>
        </section>
    )
}