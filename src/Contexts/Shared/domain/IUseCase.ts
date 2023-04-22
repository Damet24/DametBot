
export interface IUseCase<T, T2> {
  run: (params: T) => Promise<T2>
}
