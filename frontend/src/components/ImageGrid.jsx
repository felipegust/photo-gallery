import React, { useEffect } from "react";
import { useState } from "react";
import "../App.css";

function ImageGrid({ filteredImages }) {
	return (
		<div className="imageGrid">
			{filteredImages.map((image) => (
				<img
					className="imageGridItem"
					width="600"
					height="600"
					src={`data:image/jpeg;base64,${image.file}`}
				/>
			))}
		</div>
	);
}

export default ImageGrid;
