import { findMatchingOption, findIndustryOptions } from '../OnboardingHelper';

describe('findMatchingOption', () => {
  const options = [{ value: 'option1' }, { value: 'option2' }];

  it('should return the matching option', () => {
    expect(findMatchingOption('option1', options, 'default')).toBe('option1');
  });

  it('should return the default value when no match is found', () => {
    expect(findMatchingOption('nonExistingOption', options, 'default')).toBe(
      'default'
    );
  });
});

describe('findIndustryOptions', () => {
  it('should return the correct industry for a given sub-industry', () => {
    expect(
      findIndustryOptions('Semiconductors & Semiconductor Equipment')
    ).toBe('Information Technology');
    expect(findIndustryOptions('Banks')).toBe('Financials');
    expect(findIndustryOptions('Health Care Equipment & Supplies')).toBe(
      'Health & Medicine'
    );
    expect(findIndustryOptions('Education Services')).toBe('Education');
  });

  it('should return "Other" for a sub-industry not in the map', () => {
    expect(findIndustryOptions('Non-existing Sub-industry')).toBe('Other');
  });

  it('should return "Other" for an empty string', () => {
    expect(findIndustryOptions('')).toBe('Other');
  });

  it('should return "Other" for a null value', () => {
    expect(findIndustryOptions(null)).toBe('Other');
  });
});
