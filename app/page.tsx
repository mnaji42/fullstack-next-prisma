import Form from "./Form"

const getPosts = async () => {
  const res = await fetch(`${process.env.BASE_URL || ""}/api/posts`)
  if (!res.ok) {
    console.log(res)
    throw res
  }
  return res.json()
}

export default async function Home() {
  let data: Array<any> = []
  try {
    const res = await getPosts()
    data = res.data
  } catch (err) {
    console.error(err)
  }
  return (
    <main className="py-8 px-48">
      <h2>Create a new post !</h2>
      <Form />
      <h2>List of all post :</h2>
      <div className="flex flex-wrap">
        {data.map((post: any) => (
          <div
            className="w-64 p-2 rounded-md border-solid border border-black bg-blue-50 m-2 "
            key={`postkey-${post.id}`}
          >
            <h3>{post.title}</h3>
            {post.content ? (
              <p className="border-t border-blue-200 p-1">{post.content}</p>
            ) : null}
          </div>
        ))}
      </div>
    </main>
  )
}
