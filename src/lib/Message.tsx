export const getDeleteMessage = (code:string) => {
	let message: string = '';

	switch (code) {
		case 'DELETE001': {
			message = 'Delete Success';
			break;
		}
		case 'DELETE002': {
			message = 'Delete Error';
			break;
		}
		case 'DELETE003': {
			message = 'Delete Warning';
			break;
		}
		case 'DELETE004': {
			message = 'Delete Info';
			break;
		}
		default : {
			message = 'Delete';
		}
	}

	return message;
}
