import { NUM_ITEMS_IN_PAGE } from '../config';

function Pagination(props) {
    const { totalCauntItems, paginate  } = props;
    const pageNumbers = [];

    // определение кол-во ссылок на страниц в пагитнации
    for (let i = 1; i <= Math.ceil(totalCauntItems / NUM_ITEMS_IN_PAGE); i++) {
        pageNumbers.push(i);
    }

    // console.log(pageNumbers);

    return (
        <ul className="pagination">
            <li className="disabled">
                <a href="#!">
                    <i className="material-icons">chevron_left</i>
                </a>
            </li>
            {pageNumbers.map((number, index) => (
                <li className="waves-effect" key={index}>
                    <a
                        className="link-page"
                        href="#!"
                        onClick={() => {
                            paginate(number);
                            // const elem = e.target;
                            // elem.classList.add('active');
                            // elem.classList.replace('', 'active');
                        }}
                    >
                        {number}
                    </a>
                </li>
            ))}
            <li className="waves-effect">
                <a href="#!">
                    <i className="material-icons">chevron_right</i>
                </a>
            </li>
            {/* <li class="disabled">
                <a href="#!">
                    <i class="material-icons">chevron_left</i>
                </a>
            </li>
            <li class="active">
                <a href="#!">1</a>
            </li>
            <li class="waves-effect">
                <a href="#!">2</a>
            </li>
            <li class="waves-effect">
                <a href="#!">3</a>
            </li>
            <li class="waves-effect">
                <a href="#!">4</a>
            </li>
            <li class="waves-effect">
                <a href="#!">5</a>
            </li>
            <li class="waves-effect">
                <a href="#!">
                    <i class="material-icons">chevron_right</i>
                </a>
            </li> */}
        </ul>
    );
}

export { Pagination };
