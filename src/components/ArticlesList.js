import React, { useEffect, useState, useRef } from 'react';
import ArticlesListItem from './ArticlesListItem';
import newsApi, { baseParams } from '../api/news-api';
import DatePicker from 'react-date-picker';

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'

const ArticlesList = () => {

	const [articles, setArticles] = useState([]);
	const [searchTerm, setSearchTerm] = useState('politics');
	const [dateFromValue, setDateFromValue] = useState(new Date());
	const [dateToValue, setDateToValue] = useState(new Date());

	useEffect(() => {

		// get list of top news articles
		const topArticles = async () => {
			const response = await newsApi.get('/top-headlines', {
				params: {
					...baseParams,
					country: 'za'
				}
			});

			setArticles(response.data.articles)
		}

		topArticles();
	}, [])

	// search all news articles
	const allArticles = async (q, from, to) => {
		const response = await newsApi.get('/everything', {
			params: {
				...baseParams,
				q,
				from: from && from.toISOString().split('T')[0],
				to: to && to.toISOString().split('T')[0]
			}
		});

		setArticles(response.data.articles)
	}

	const initialRender = useRef(true);

	useEffect(() => {
		if (initialRender.current) {
			initialRender.current = false;
		} else {
			allArticles(searchTerm, dateFromValue, dateToValue)
		}
	}, [dateFromValue, dateToValue]);

	// form search
	const searchArticles = e => {
		e.preventDefault();

		allArticles(searchTerm);
	}

	// render list
	const list = articles.map((article, i) => {
		return (
			<ArticlesListItem {...article} key={i} />
		);
	})

	return (
		<Container>
			<Row>
				<Col>
					<form onSubmit={searchArticles}>
						<Form.Group>
							<div className="search-bar-container">
								<Form.Control size="lg" type="text" placeholder="Search" onChange={e => setSearchTerm(e.target.value)} />
							</div>

						</Form.Group>
					</form>
				</Col>
			</Row>
			<Row>
				<Col md={3}>
					<div style={{ marginBottom: '1rem' }}>
						<span style={{ marginRight: '0.5rem' }}>From</span>
						<DatePicker
							onChange={setDateFromValue}
							value={dateFromValue}
							format={'y-MM-dd'}
						/>
					</div>

				</Col>
				<Col md={3}>
					<div style={{ marginBottom: '1rem' }}>
						<span style={{ marginRight: '0.5rem' }}>To</span>
						<DatePicker
							onChange={setDateToValue}
							value={dateToValue}
							format={'y-MM-dd'}
						/>
					</div>
				</Col>

			</Row>


			{list}
		</Container>
	);
}

export default ArticlesList;