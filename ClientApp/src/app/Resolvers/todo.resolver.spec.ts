import { TestBed } from '@angular/core/testing';

import { TodoResolver } from './todo.resolver';

describe('TodoResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TodoResolver = TestBed.get(TodoResolver);
    expect(service).toBeTruthy();
  });
});
