export function getUserInfo() {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve({
				name: "Núria",
				email: "nuriamail@mail.com",
			});
		}, 2000);
	});
}

export function getUserEnrolledCourses() {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve([
				{
					title: "TypeScript Avanzado: Más allá de any",
				},
				{
					title: "Buenas practicas con CSS: Selectores",
				},
				{
					title: "Patrones de Diseño: Creacionales",
				},
			]);
		}, 2000);
	});
}
