import logo from "./logo.svg";
import "./App.css";
import ImageUpload from "./components/ImageUpload";
import ImageGrid from "./components/ImageGrid";
import FilterText from "./components/FilterText";
import { useState, useEffect } from "react";

function App() {
	const [filter, setFilter] = useState([]);
	const [images, setImages] = useState([]);
	
	const filteredImages =
		filter.length > 0
			? images.filter((image) =>
					image.properties.some((property) =>
						filter.includes(property)
					)
			  )
			: images;

	const properties = filteredImages.map(({ properties }) => properties);
	const filterItems = [...new Set(properties.flat())].sort();

	const fetchImages = async () => {
		const result = await fetch("http://localhost:3000/images", {
			method: "GET",
		})
			.then((response) => response.json())
			.then((data) => data);
		setImages(result);
	};

	useEffect(() => {
		fetchImages();
	}, []);

	return (
		<div className="wrapper">
			<div className="column1">
				<h1>Gallery with AI</h1>
				<ImageUpload fetchImages={fetchImages} />
				<FilterText
					filter={filter}
					setFilter={setFilter}
					filterItems={filterItems}
				/>
			</div>
			<div>
				<ImageGrid filteredImages={filteredImages} />
			</div>
		</div>
	);
}

export default App;
