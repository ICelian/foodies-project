import Link from "next/link";

export default function SlugList({ params }) {
    console.log(params)
    return(
        <div>
            <h1> test : { params.mealSlug } </h1>
            <h1> test : { params.mealSlug } </h1>
        </div>
    )
}