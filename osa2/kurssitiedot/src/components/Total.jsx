const Total = ({parts}) => {
    const total = parts.reduce((acc, part) => {
        return acc += part.exercises;
    }, 0)
    return (
        <b>total of {total} courses</b>
    )
}

export default Total