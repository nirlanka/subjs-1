export let notImplemented = _ =>
    _0 => {
        throw new Error("Function not implemented", _ ?? "")
    }

export let assert = _ => {
    let error, result

    try {
        result = _()
    } catch (_error) {
        error = _error
    }

    if (!result || error)
        throw new Error("[ASSERT FAIL] " + _.toString())
}
