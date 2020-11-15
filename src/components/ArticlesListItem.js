import React from 'react';
import PropTypes from 'prop-types';

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

const ArticlesListItem = ({ title, author, urlToImage, content, url, publishedAt }) => {
	return (
		<Row className="article-list-item">
			<Col md={3}><img src={urlToImage} /> </Col>
			<Col md={9}>
				<h4 className="title">{title}</h4>
				<div className="author">{author} | {publishedAt}</div><br />
				<p>{content}</p>
				<Button href={url} variant="primary" target="_blank">Read</Button>
			</Col>
			<Col md={12}><hr /></Col>

		</Row>
	);
}

ArticlesListItem.propTypes = {
	title: PropTypes.string.isRequired,
	author: PropTypes.string,
	urlToImage: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired,
	content: PropTypes.string,
	publishedAt: PropTypes.string
}

export default ArticlesListItem;