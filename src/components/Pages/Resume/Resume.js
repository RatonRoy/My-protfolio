import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import resume from '../../../Asset/raton-roy.resume.pdf'

const Resume = () => {
	const [numPages, setNumPages] = useState(null);
	const [pageNumber, setPageNumber] = useState(1);

	function onDocumentLoadSuccess({ numPages }) {
		setNumPages(numPages);
	}
	
	return (
		<div>
			<Document
				file= {resume}
				onLoadSuccess={onDocumentLoadSuccess}
			>
				<Page pageNumber={pageNumber} />
			</Document>
			<p>Page {pageNumber} of {numPages}</p>
		</div>
	);
};

export default Resume;