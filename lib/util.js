const promisify = (func) => {
	const wrapper = (...args) => {
		return new Promise((accept, reject) => {
			let o = null;
			const cb = () => {
				accept(o);
			};

			try {
				console.log(...args);
				o = func(...args, cb);
			} catch (e) {
				reject(e);
			}
		});
	};

	return wrapper;
};

const waitFor = (t) => {
	return new Promise(resolve => {
		setTimeout(resolve, t);
	});
};
