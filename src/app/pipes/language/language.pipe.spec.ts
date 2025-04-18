import { TestBed } from '@angular/core/testing';  // Import TestBed
import { LanguagePipe } from './language.pipe';
import { LanguageService } from '../../state/language/language.service'; // Import the service

describe('LanguagePipe', () => {
  let pipe: LanguagePipe;
  let languageService: jasmine.SpyObj<LanguageService>;

  beforeEach(() => {
    // Create a mock instance of LanguageService
    languageService = jasmine.createSpyObj('LanguageService', ['getLanguageName']);

    // Configure the TestBed
    TestBed.configureTestingModule({
      providers: [
        LanguagePipe,
        { provide: LanguageService, useValue: languageService }
      ]
    });

    // Create the pipe instance
    pipe = TestBed.inject(LanguagePipe);

    it('should create an instance', () => {
      expect(pipe).toBeTruthy();
    });

  });

});