import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function HomePage() {
	const user = useSelector((state) => state.auth.login?.currentUser)
	const navigate = useNavigate();

	useEffect(() => {
		if (!user) {
			navigate('/login');
		}
	}, [])

	return (
		<div className="h-full">
			<h1>HomePage</h1>
		</div>
	);
}

export default HomePage;