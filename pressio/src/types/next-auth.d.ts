import 'next-auth'

declare module 'next-auth' {
	interface User {
		userId : string,
		userPhoneNo : string,
		role : string,
		password : string,
		createdAt : string,
		lastModifiedAt : string,
		enabled : boolean,
		username : string,
		authorities : string[],
		accountNonExpired : boolean,
		accountNonLocked : boolean,
		credentialsNonExpired : boolean
	}
	interface Session {
		user : User
		token : string
	}

}
