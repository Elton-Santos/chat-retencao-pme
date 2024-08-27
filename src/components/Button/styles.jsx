import { Button } from './styles'
import PropTypes from 'prop-types'


function DefautButton({ children, theme, ...props }) {

    return (
        <Button {...props} theme={theme}>{children}</Button>
    )
}

DefautButton.prototype = {
    children: PropTypes.node.isRequired,
    theme: PropTypes.string
}

export default DefautButton