export function add(a: number, b: number): number {
  return a + b
}

describe('add', () => {
  it('add', () => {
    expect(add(1, 1)).to.be.equal(2)
  })
})
