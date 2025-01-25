import Link from "next/link";

export default function MealPage() {
    return (
        <div>
            <h1> Page Meal</h1>

            <div>
                <Link href="meals/page-1">Page 1</Link>
                <Link href="meals/page-2">Page 2</Link>
            </div>
        </div>
    )
}