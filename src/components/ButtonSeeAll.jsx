import { Button } from 'antd';


import '../styles/components/ContentLayoutStyles.css';

const ButtonSeeAll = ({ onClick, ...props }) => (
    <Button className="btn-see-all" onClick={onClick} {...props}>
        Ver todo
    </Button>
);

export default ButtonSeeAll;