
export const K12WEB = "k12";
export const K12LEARNING = "k12learning";
export const K12TEACHING = "k12teaching";

export const LEARNING = "learning";
export const TEACHING = "teaching";
export const RESEARCH = "research";

export function getDomainUrl(domain, include='') {
	let url = 'http://cellcollective.org?domain=not-found';
	switch (domain) {
		case K12WEB: url=process.env.CC_URL_K12; break;
		case K12LEARNING: url=process.env.CC_URL_K12LEARN; break;
		case K12TEACHING: url=process.env.CC_URL_K12TEACH; break;
		case LEARNING: url=process.env.CC_URL_LEARN; break;
		case TEACHING: url=process.env.CC_URL_TEACH; break;
		case RESEARCH: url=process.env.CC_URL_RESEARCH; break;
		default: null;
	}

	return `${url}${include}`;
}