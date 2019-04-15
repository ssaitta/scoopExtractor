function main() {
	const path = window.location.pathname.split("/");
	if (path.includes("oakarticle")) {
		window.alert(`The scoopId of this article is: ${path[3]}`);
	} else {
		window.alert(
			`The scoopId of this article is: ${
				document.querySelector("meta[name='articleid']").content
			}`
		);
	}
}

main();
