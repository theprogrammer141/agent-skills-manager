"use client";

export default function Error({
    error,
    reset,
}: {
    error: Error;
    reset: () => void;
}) {
    return (
        <div className="text-center py-16">
            <h1>Something went wrong!</h1>
            <p>{error.message}</p>
            <button onClick={() => reset()} className="btn btn-primary">Try again</button>
        </div>
    )
}