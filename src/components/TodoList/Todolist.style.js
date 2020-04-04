import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles({
    todoList: {
        listStyleType: "none",
        padding: 0
    },
    removeIcon: {
        float: "right"
    },
    todoListItem: {
        marginBottom: 5,
        paddingBottom: 5,
        borderBottom: '1px solid #ececec',
        '&.completed $itemTitle': {
            textDecoration: "line-through"
        }
    },
    itemTitle: {

    }
})

export default useStyle;