module.exports = {
	server: {
		host: '0.0.0.0',
		port: 3000,
		baseUrl: '/'
	},

	odm: {
		kamigames: {
			db: {
				client: 'mongo',
				serviceName: 'mongodb',
				connection: {
					database: 'kamigames',
					host: 'ec2-18-191-78-22.us-east-2.compute.amazonaws.com',
					port: 27017,
					user: 'kguser',
					password: '1234'
				}
			}
		},
		kidsbackyard: {
			db: {
				client: 'mongo',
				serviceName: 'mongodb',
				connection: {
					database: 'kidsbackyard',
					host: 'ec2-18-191-78-22.us-east-2.compute.amazonaws.com',
					port: 27017,
					user: 'kguser',
					password: '1234'
				}
			}
		}
	}
}