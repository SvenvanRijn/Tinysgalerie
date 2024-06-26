<form action="{{ route('login') }}" method="post">
    @csrf
    <input type="text" name="email">
    <input type="text" name="password">
    <input type="submit">
</form>
