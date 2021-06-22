import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../components/header/Header"
import Posts from "../../components/posts/Posts"
import SideBar from "../../components/sideBar/SideBar"
import "./home.css"
import { useLocation } from "react-router-dom";
// import { config } from "../../components/Config";

export default function Home() {
    const [posts, setPosts] = useState([]);
    const { search } = useLocation();

    useEffect(() => {
        const fetchPosts = async () => {
            // const res = await axios.get(`${config.SERVER_URI}/posts` + search);
            const res = await axios.get("/api/posts" + search);
            setPosts(res.data);
        };
        fetchPosts();
    }, [search]);

    return (
        <>
            <Header />
            <div className="home">
                <Posts posts={posts} />
                <SideBar />
            </div>
        </>
    )
}
