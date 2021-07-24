import React from 'react';
import {render} from 'react-dom';
import {
	ApolloClient,
	InMemoryCache,
	ApolloProvider,
	useQuery,
	gql
} from "@apollo/client";

const client = new ApolloClient({
	uri: 'https://48p1r2roz4.sse.codesandbox.io',
	cache: new InMemoryCache()
});

function ExchangeRates() {
	const {loading, error, data} = useQuery(EXCHANGE_RATES);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error :(</p>;

	return data.rates.map(({currency, rate}) => (
		<div key={currency}>
			<p>
				{currency}: {rate}
			</p>
		</div>
	));
}


const EXCHANGE_RATES = gql`
  query GetExchangeRates {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`;


function App() {
	return (
		<div>
			<h2>My first Apollo app 🚀</h2>
			<ExchangeRates/>
		</div>
	);
}

render(
	<ApolloProvider client={client}>
		<App/>
	</ApolloProvider>,
	document.getElementById('root'),
);