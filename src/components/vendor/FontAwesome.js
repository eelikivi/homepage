import { library, dom } from '@fortawesome/fontawesome-svg-core'

import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn'
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'

library.add(
	faFacebookF,
	faLinkedinIn,
	faGithub
)

dom.watch()