export default function UserProfile({params} : any) {
    return (
        <div className="felx felx-col items-center justify-center min-h-screen py-2">
            <h1>Profile</h1>
            <hr />
            <p className="text-4xl">Wrlcome {params.id}</p>
        </div>
    )
}