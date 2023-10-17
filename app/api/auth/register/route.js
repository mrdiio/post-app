export const POST = async (req, context) => {
  try {
    const { name, email, password } = await req.json()

    const user = await db.user.create({
      data: {
        name,
        email,
        password,
      },
    })

    return NextResponse.json({
      message: 'User created successfully',
      user,
    })
  } catch (error) {
    return NextResponse.error()
  }
}
