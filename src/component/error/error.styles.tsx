
import styled from 'styled-components'


const Wrapper = styled.div`
.error-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: absolute;
    flex-wrap: wrap;
    width: 100%;
    top: 30%;
    left: 50%;
    transform: translateX(-50%);
    color: var(--color-white);
    -webkit-transform: translateX(-50%);
    -moz-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    -o-transform: translateX(-50%);
}

.icon {
    font-size: 5rem;
}
`
export default Wrapper;
