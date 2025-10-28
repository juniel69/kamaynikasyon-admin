import React, { useState } from 'react'

export const AuthPage: React.FC = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	return (
		<div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
			<div className="w-full max-w-md space-y-8">
				<div>
					<h1 className="text-center text-3xl font-bold tracking-tight">Kamaynikasyon Admin</h1>
					<p className="mt-2 text-center text-sm text-gray-600">Sign in to continue</p>
				</div>
				<div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
					<form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
						<div>
							<label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
							<input
								id="email"
								type="email"
								required
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
							/>
						</div>
						<div>
							<label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
							<input
								id="password"
								type="password"
								required
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
							/>
						</div>

						<button type="submit" className="w-full inline-flex justify-center items-center rounded-lg bg-indigo-600 px-4 py-2.5 text-white font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
							Sign in
						</button>
					</form>

					<div className="mt-4">
						<div className="relative">
							<div className="absolute inset-0 flex items-center" aria-hidden="true">
								<div className="w-full border-t border-gray-200" />
							</div>
							<div className="relative flex justify-center text-sm">
								<span className="bg-white px-2 text-gray-500">or</span>
							</div>
						</div>
						<button className="mt-4 w-full inline-flex justify-center items-center rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-gray-700 font-medium shadow-sm hover:bg-gray-50">
							<svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" aria-hidden="true">
								<path fill="#EA4335" d="M12 10.2v3.6h5.1c-.2 1.2-1.5 3.6-5.1 3.6-3.1 0-5.7-2.6-5.7-5.7S8.9 6 12 6c1.8 0 3 .8 3.7 1.5l2.5-2.5C16.8 3.6 14.6 2.7 12 2.7 7.1 2.7 3.3 6.5 3.3 11.4s3.8 8.7 8.7 8.7c5 0 8.4-3.5 8.4-8.4 0-.6-.1-1-.1-1.5H12z"/>
							</svg>
							Sign in with Google
						</button>
					</div>
				</div>

				<p className="text-xs text-center text-gray-500">© Kamaynikasyon Admin</p>
			</div>
		</div>
	)
}
