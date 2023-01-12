<template>
	<div class="c-img">
		<img src="../../public/logo.png" alt="logo" />
	</div>
	<h1>Login</h1>
	<div class="c-login">
		<input
			autocomplete="off"
			type="text"
			placeholder="Enter Email"
			v-model="email"
		/>
		<input
			autocomplete="off"
			type="password"
			placeholder="Enter Password"
			v-model="password"
		/>
		<button type="button">Login</button>
		<div>
			<router-link to="sign-up">sign-up</router-link>
		</div>
	</div>
</template>

<script>
export default {
	name: 'LoginPage',

	data() {
		return {}
	},
}
</script>
